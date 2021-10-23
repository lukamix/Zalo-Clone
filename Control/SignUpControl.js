import { notifyMessage } from "./UtilsControl";

export function SignUp(phonenumber, password, username) {
  //Precheck PhoneNumber, Password
  if (!phonenumber && !password) {
    notifyMessage("Vui lòng nhập số điện thoại và mật khẩu");
  } else if (!phonenumber) {
    notifyMessage("Vui lòng nhập số điện thoại !");
  } else if (
    !phonenumber.startsWith("0") ||
    phonenumber.length < 10 ||
    phonenumber.length > 11
  ) {
    notifyMessage("Định dạng số điện thoại không đúng !");
  } else if (!password) {
    notifyMessage("Vui lòng nhập mật khẩu !");
  }
    else{
      //Call API Register Here
      console.log(phonenumber);
      console.log(password);
      console.log(username);
      fetch(URI+'users/register', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          phonenumber: phonenumber,
          password: password,
          username:username
        })
      })
      .then((response) =>{
        const statusCode = response.status;
        const data = response.json();
        return Promise.all([statusCode, data]);
      }
        )
      .then(([res,data]) => {
        console.log(res,data);
        navigation.navigate("MainPage");
      })
      .catch((error) => {
        console.error(error);
      });
    }
}
