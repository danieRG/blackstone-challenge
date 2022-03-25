import { Card, CardContent, CardHeader, CardMedia, Typography, Box } from "@mui/material"

export const Tweet = () => {
  return (
      <Card 
        elevation={2}
        gap={2}
      >
          <CardContent>
              <CardHeader 
                  title="Daniel Ruiz"
                  subheader="@danielruiz"
                  sx={{
                      display: "start",
                  }}
              />
            <Card sx={{maxWidth: 80, float:'right', mb:2, ml:2 }}>
              <CardMedia 
                  component="img"
                  image="https://pbs.twimg.com/profile_images/1507025964534013962/90R-9xb1_400x400.jpg"
                  alt="profile"
                  height="80"
              />
            </Card>
            <Box>
              <Typography> hey! this is an example of a real-time tweet with Daniel #javascript #iloveElon #twiiter </Typography>
            </Box>
          </CardContent>
      </Card>
  )
}
