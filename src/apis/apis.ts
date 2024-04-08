import axios from "axios";

const getUrl = "";
const getData = async (data) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url: getUrl,
      data: data,
    })
      .then((response: any) => {
        resolve(response);
      })
      .catch((error: any) => {
        if (error) {
          if (error.response) {
            if (error.response.status === 500) {
              reject({
                data: { message: "Something went wrong, Please try again" },
              });
            } else {
              reject(error.response);
            }
          } else if (error.request) {
            reject({ data: { message: "Network issue, Please try again" } });
          } else {
            reject(error.response);
          }
        } else {
          reject(error.response);
        }
      });
  });
};
export { getData };
