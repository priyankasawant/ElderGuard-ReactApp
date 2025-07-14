// UploadVideo Component
import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  Paper,
  Typography,
  Button,
  Stack,
  Alert,
  CircularProgress
 
} from "@mui/material";

export default function FallDetectionCamera() {
  const API = "https://elderguard-ai-flask.onrender.com";
  const videoRef = useRef(null);
  const [tabIndex, setTabIndex] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [status, setStatus] = useState("Not started");
  const [loading, setLoading] = useState(false);
  const [detectionStarted, setDetectionStarted] = useState(false);
  const [stream, setStream] = useState(null);
  const [uploadResultUrl, setUploadResultUrl] = useState("");
  const [uploadStatus, setUploadStatus] = useState("");

  const intervalRef = useRef(null);
  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  useEffect(() => {
    if (detectionStarted && videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream, detectionStarted]);

  const startDetection = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      setStream(mediaStream);
      setDetectionStarted(true);
      setStatus("Starting...");

      intervalRef.current = setInterval(() => {
        captureAndSend();
      }, 3000);
    } catch (err) {
      console.error("Camera access error:", err);
      setStatus("Camera access denied");
    }
  };

  const stopDetection = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }
    clearInterval(intervalRef.current);
    setDetectionStarted(false);
    setImageUrl("");
    setStatus("Not started");
  };

  const captureAndSend = () => {
    const video = videoRef.current;
    if (!video) return;

    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    canvas.toBlob((blob) => {
      if (!blob) return;

      const formData = new FormData();
      formData.append("frame", blob, "frame.jpg");

      setLoading(true);

      fetch(`${API}/analyze`, {
  method: "POST",
  body: formData,
})
  .then(async (res) => {
    const prediction = res.headers.get("X-Prediction") || "Unknown";
    const blob = await res.blob();
    const imgURL = URL.createObjectURL(blob);
    console.log("prediction form Flask", prediction);
    setStatus(prediction);
    setImageUrl(imgURL);
  })
  .catch((err) => {
    console.error("Upload error:", err);
    setStatus("Error");
  });



      
   
  })
};

  // ========== MP4 Upload ==========
  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("video", file);

    setUploadStatus("Uploading...");
    setUploadResultUrl("");

    try {
      const res = await fetch(`${API}/upload`, {
        method: "POST",
        body: formData,
      });

      const blob = await res.blob();
      const prediction = res.headers.get("X-Prediction") || "Unknown";

      const videoURL = URL.createObjectURL(blob);
      setUploadResultUrl(videoURL);
      setUploadStatus(prediction);
    } catch (err) {
      console.error("Upload failed:", err);
      setUploadStatus("Error during upload.");
    }
  };

  const isFall = status.toLowerCase().includes("fall");

  return (
    <Box sx={{ width: "100%", padding: 4 }}>
     

      <Paper elevation={3}>
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label="📹 Live Detection" />
          <Tab label="🎥 Upload Video" />
        </Tabs>
      </Paper>

      {/* ==================== Tab 1: Live Detection ==================== */}
      {tabIndex === 0 && (
        <Paper elevation={2} sx={{ padding: 4, mt: 3 }}>
          <Typography variant="h6" gutterBottom>
            Real-Time Fall Detection with Webcam
          </Typography>

          <Stack direction="row" spacing={2} mb={3}>
            <Button
              variant="contained"
              onClick={startDetection}
              disabled={detectionStarted}
            >
              Start Detection
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={stopDetection}
              disabled={!detectionStarted}
            >
              Stop Detection
            </Button>
          </Stack>

          {detectionStarted && (
            <Box display="flex" gap={4} flexWrap="wrap">
              <Box>
                <Typography>Live Webcam</Typography>
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  playsInline
                  style={{
                    width: "400px",
                    height: "300px",
                    borderRadius: "8px",
                    border: "2px solid #1976d2",
                  }}
                />
              </Box>

              <Box>
                <Typography>AI Prediction Frame</Typography>
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt="AI Frame"
                    style={{
                      width: "400px",
                      height: "300px",
                      borderRadius: "8px",
                      border: `2px solid ${isFall ? "#d32f2f" : "#388e3c"}`,
                    }}
                  />
                ) : (
                  <Box
                    width="400px"
                    height="300px"
                    border="2px dashed #aaa"
                    borderRadius="8px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Typography>Waiting for detection...</Typography>
                  </Box>
                )}

                <Box mt={2}>
                  {loading ? (
                    <CircularProgress />
                  ) : isFall ? (
                    <Alert severity="error">🚨 Fall Detected!</Alert>
                  ) : (
                    <Alert severity="success">✅ No fall detected</Alert>
                  )}
                </Box>
              </Box>
            </Box>
          )}
        </Paper>
      )}

      {/* ==================== Tab 2: Upload Video ==================== */}
      {tabIndex === 1 && (
        <Paper elevation={2} sx={{ padding: 4, mt: 3 }}>
          <Typography variant="h6" gutterBottom>
            Upload MP4 Video for Fall Detection
          </Typography>

          <Button variant="contained" component="label">
            Upload Video
            <input type="file" accept=".mp4" hidden onChange={handleUpload} />
          </Button>

          {uploadResultUrl && (
            <Box mt={3}>
              <Typography>Processed Result:</Typography>
              <video
                controls
                src={uploadResultUrl}
                style={{ width: "640px", borderRadius: "8px", marginTop: "10px" }}
              />
              <Alert severity="info" sx={{ mt: 2 }}>
                {uploadStatus}
              </Alert>
            </Box>
          )}
        </Paper>
      )}
    </Box>
  );
}
