import React from "react";
import "./Benefits.css";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import LockIcon from "@mui/icons-material/Lock";
import GroupIcon from "@mui/icons-material/Group";

const Benefits = () => {
  const benefitsList = [
    {
      text: "Submit referrals easily via our website’s referral section.",
      icon: <StarIcon />,
    },
    {
      text: "Earn rewards once your referral joins an Accredian program.",
      icon: <LockIcon />,
    },
    {
      text: "Both parties receive a bonus 30 days after program enrollment.",
      icon: <GroupIcon />,
    },
  ];

  return (
    <Container className="benefits">
      <Typography variant="h3" gutterBottom className="benefits-title">
        Benefits
      </Typography>
      <List className="benefits-list">
        {benefitsList.map((benefit, index) => (
          <ListItem key={index} className="benefits-list-item">
            <ListItemIcon className="benefits-list-item-icon">
              {benefit.icon}
            </ListItemIcon>
            <ListItemText
              primary={benefit.text}
              className="benefits-list-item-text"
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Benefits;
