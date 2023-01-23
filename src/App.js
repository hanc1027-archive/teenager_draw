import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  Grid,
  Container,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { members_list_no_sort, core_members } from "./members_list";
import { Box } from "@mui/system";

const drawAmount = 3;

export default function App(props) {
  const [drawResult, setDrawResult] = useState([{ no: "", name: "" }]);
  const [isLoading, setIsLoading] = useState(false);
  const [randomNoList, setRandomNoList] = useState([]);
  var duplicateList = [...members_list_no_sort];

  return (
    <>
      <CssBaseline />
      <AppBar sx={{ backgroundColor: "#B5F59B" }}>
        <Toolbar>
          <Typography variant="h5" sx={{ color: "GrayText" }}>
            青年班第五期抽籤系統
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Grid
        container
        spacing={3}
        paddingTop="40px"
        paddingLeft="40px"
        paddingRight="40px"
      >
        <Grid item xs={8}>
          <center>
            <Container>
              <Grid container>
                {members_list_no_sort.map((item) => {
                  return (
                    <Grid
                      item
                      xs={2}
                      sx={{
                        borderStyle: "solid",
                        borderWidth: "0.5px",
                        backgroundColor: `${
                          randomNoList.includes(item.no)
                            ? "burlywood"
                            : "transparent"
                        }`,
                      }}
                    >
                      {item.no}
                      <br />
                      {item.name}
                    </Grid>
                  );
                })}
              </Grid>
            </Container>
          </center>
        </Grid>
        <Grid item xs={4}>
          <Container
            sx={{
              backgroundColor: "burlywood",
              borderTopLeftRadius: "5px",
              borderTopRightRadius: "5px",
            }}
          >
            <Typography variant="h6">
              <center>本次中籤</center>
            </Typography>
          </Container>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
              height: "300px",
              borderBottomLeftRadius: "5px",
              borderBottomRightRadius: "5px",
              borderColor: "burlywood",
              borderWidth: "1px",
              borderStyle: "solid",
              padding: "20px",
            }}
          >
            <center>
              {drawResult.map((item) => {
                return (
                  <Grid item xs={12}>
                    {item.no} {item.name}
                  </Grid>
                );
              })}
            </center>
          </Box>
          <Box padding="20px"></Box>
          <Container>
            <center>
              <LoadingButton
                sx={{ minWidth: "150px" }}
                loading={isLoading}
                loadingIndicator="抽籤中…"
                variant="outlined"
                onClick={() => {
                  setIsLoading(true);
                  setDrawResult([]);
                  const result = [];
                  core_members.sort(() => Math.random() - 0.5);

                  for (let index = 0; index < drawAmount; index++) {
                    result.push(core_members[index]);
                  }

                  var refreshRandomList = setInterval(() => {
                    var tmp_result = [];
                    duplicateList.sort(() => Math.random() - 0.5);

                    for (let index = 0; index < drawAmount; index++) {
                      tmp_result.push(duplicateList[index].no);
                    }
                    setRandomNoList(tmp_result);
                  }, 200);

                  setTimeout(() => {
                    clearInterval(refreshRandomList);
                    setIsLoading(false);
                    setDrawResult(result);

                    var tmp = [];
                    for (let index = 0; index < drawAmount; index++) {
                      tmp.push(result[index].no);
                    }
                    setRandomNoList(tmp);
                  }, 1500);
                }}
              >
                開始抽籤
              </LoadingButton>
            </center>
          </Container>
        </Grid>
      </Grid>
    </>
  );
}
