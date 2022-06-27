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

  createProject(projeto, data) {
    let promise = this.appwrite.database.createDocument(
      "62b9978c83ac6260d51c",
      projeto,
      data
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

  listProjects() {
    let promise = this.appwrite.database.listDocuments("62b9978c83ac6260d51c")

    promise.then(
      function (response) {
        console.log(response) // Success
      },
      function (error) {
        console.log(error) // Failure
      }
    )
    return promise
  }

  savePdf(fileId, file) {
    let promise = this.appwrite.storage.createFile(
      "62b9bd5a4d6156aae69c",
      fileId,
      file
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

  getPdfView(fileId) {
    let result = this.appwrite.storage.getFileView(
      "62b9bd5a4d6156aae69c",
      fileId
    )

    return result
  }
}

export default AppWrite
