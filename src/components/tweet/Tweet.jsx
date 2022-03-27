import { Card, CardContent, CardHeader, CardMedia, Typography, Box } from "@mui/material"

export const Tweet = ({ tweet }) => {
  const { user, text } = tweet
  return (
    <Card
      elevation={2}
      gap={2}
      sx={{
        width: "80%",
      }}
    >
      <CardContent>
        <CardHeader
          title={user.name}
          subheader={`@${user.screen_name}`}
          sx={{
            display: "start",
          }}
        />
        <Card sx={{ maxWidth: 80, float: 'right', mb: 2, ml: 2 }}>
          <CardMedia
            component="img"
            image={user.profile_image_url}
            alt="profile"
            height="80"
          />
        </Card>
        <Box>
          <Typography> {text} </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}
