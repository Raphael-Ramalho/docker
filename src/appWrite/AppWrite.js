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

  createAccountSession(userEmail, userPassword) {
    let promise = this.appwrite.account.createSession(userEmail, userPassword)

    promise.then(
      function (response) {
        console.log(response) // Success
      },
      function (error) {
        console.log(error) // Failure
      }
    )
  }

  async getAccountSession() {
    let promise = this.appwrite.account.get()

    promise.then(
      function (response) {
        console.log(response) // Success
      },
      function (error) {
        console.log(error) // Failure
      }
    )
  }

  createProject(data) {
    let promise = this.appwrite.database.createDocument(
      "projetos",
      data,
      ["role:all"],
      ["role:all"]
    )

    promise.then(
      function (response) {
        console.log(response) // Success
      },
      function (error) {
        console.log(error) // Failure
      }
    )
  }
}

export default AppWrite
