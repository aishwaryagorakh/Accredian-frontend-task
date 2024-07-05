import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import ReferralModal from "./components/ReferralModal";
import Footer from "./components/Footer";
import axios from "axios";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReferNowClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitReferral = async (referrer, referee) => {
    try {
      const response = await axios.post("http://localhost:3300/api/referrals", {
        referrerName: referrer.name,
        referrerEmail: referrer.email,
        refereeName: referee.name,
        refereeEmail: referee.email,
      });
      console.log("Referral submitted:", response.data);
      handleCloseModal(); // Close modal after successful submission
      // Optionally, add logic to display success message or handle further actions
    } catch (error) {
      console.error("Error submitting referral:", error.response.data);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <Router>
      <HeroSection onReferNowClick={handleReferNowClick} />
      <ReferralModal
        open={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitReferral}
      />
      <Footer />
    </Router>
  );
}

export default App;
