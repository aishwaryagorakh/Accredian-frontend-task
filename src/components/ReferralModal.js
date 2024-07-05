// // src/components/ReferralModal.js
// import React, { useState } from "react";
// import axios from 'axios';
// import {
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   TextField,
//   Button,
//   Grid,
// } from "@mui/material";

// const ReferralModal = ({ open, onClose }) => {
//   const [referrer, setReferrer] = useState({ name: "", email: "" });
//   const [referee, setReferee] = useState({ name: "", email: "" });
//   const [errors, setErrors] = useState({});

//   const handleChange = (e, type) => {
//     const { name, value } = e.target;
//     type === "referrer"
//       ? setReferrer({ ...referrer, [name]: value })
//       : setReferee({ ...referee, [name]: value });
//   };

//   const handleSubmit = () => {
//     const newErrors = {};
//     if (!referrer.name) newErrors.referrerName = "Referrer name is required";
//     if (!referrer.email) newErrors.referrerEmail = "Referrer email is required";
//     if (!referee.name) newErrors.refereeName = "Referee name is required";
//     if (!referee.email) newErrors.refereeEmail = "Referee email is required";

//     setErrors(newErrors);
//     if (Object.keys(newErrors).length === 0) {
//       console.log("Form Submitted", { referrer, referee });
//       onClose();
//     }
//   };

//   return (
//     <Dialog open={open} onClose={onClose}>
//       <DialogTitle>Refer a Friend</DialogTitle>
//       <DialogContent>
//         <Grid container spacing={2}>
//           <Grid item xs={12}>
//             <TextField
//               label="Referrer's Name"
//               name="name"
//               value={referrer.name}
//               onChange={(e) => handleChange(e, "referrer")}
//               fullWidth
//               error={!!errors.referrerName}
//               helperText={errors.referrerName}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Referrer's Email"
//               name="email"
//               value={referrer.email}
//               onChange={(e) => handleChange(e, "referrer")}
//               fullWidth
//               error={!!errors.referrerEmail}
//               helperText={errors.referrerEmail}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Referee's Name"
//               name="name"
//               value={referee.name}
//               onChange={(e) => handleChange(e, "referee")}
//               fullWidth
//               error={!!errors.refereeName}
//               helperText={errors.refereeName}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Referee's Email"
//               name="email"
//               value={referee.email}
//               onChange={(e) => handleChange(e, "referee")}
//               fullWidth
//               error={!!errors.refereeEmail}
//               helperText={errors.refereeEmail}
//             />
//           </Grid>
//         </Grid>
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={onClose} color="secondary">
//           Cancel
//         </Button>
//         <Button onClick={handleSubmit} color="primary">
//           Submit
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default ReferralModal;

// ReferralModal.js

import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Grid,
} from "@mui/material";

const ReferralModal = ({ open, onClose, onSubmit }) => {
  const [referrer, setReferrer] = useState({ name: "", email: "" });
  const [referee, setReferee] = useState({ name: "", email: "" });

  const handleChange = (e, type) => {
    const { name, value } = e.target;
    type === "referrer"
      ? setReferrer({ ...referrer, [name]: value })
      : setReferee({ ...referee, [name]: value });
  };

  const handleSubmit = () => {
    onSubmit(referrer, referee); // Pass referrer and referee data to onSubmit handler
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Refer a Friend</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Referrer's Name"
              name="name"
              value={referrer.name}
              onChange={(e) => handleChange(e, "referrer")}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Referrer's Email"
              name="email"
              value={referrer.email}
              onChange={(e) => handleChange(e, "referrer")}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Referee's Name"
              name="name"
              value={referee.name}
              onChange={(e) => handleChange(e, "referee")}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Referee's Email"
              name="email"
              value={referee.email}
              onChange={(e) => handleChange(e, "referee")}
              fullWidth
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ReferralModal;
