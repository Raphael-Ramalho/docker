import { Appwrite } from "appwrite"

class AppWrite {
  constructor() {
    this.appwrite = new Appwrite()
      .setEndpoint("http://localhost/v1") // Your Appwrite Endpoint
      .setProject("62b5a7af79255b4cddd8") // Your project ID
  }

  createAccount(userName, userEmail, userPassword) {
    this.appwrite.account
      .create("unique()", userEmail, userPassword, userName)
      .then(
        (response) => {
          console.log(response)
        },
        (error) => {
          console.log(error)
        }
      )
  }
}

export default AppWrite