import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

const MemberCard = ({
  id,
  memberId,
  firstName,
  lastName,
  vaccinations,
  image,
}) => {
  const [selectedImage, setSelectedImage] = React.useState(image);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const imageUrl = reader.result;
      setSelectedImage(imageUrl);
    };
    console.log(selectedImage);
    reader.readAsDataURL(file);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        src={selectedImage}
        image={selectedImage}
        title={`${firstName} ${lastName}`}
      />
      <CardContent className="Data">
        <Typography gutterBottom variant="h5" component="div">
          {`${firstName} ${lastName}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          The member's details will appear here. The member's details will
          appear here.The member's details will appear here.
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
        >
          <input
            hidden
            accept="image/*"
            type="file"
            onChange={handleImageUpload}
          />
          <AddPhotoAlternateIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default MemberCard;
