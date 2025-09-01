const ErrorComponent = () => {
      function throwError(message: string): never {
             throw new Error(message);
      }
      const msd=throwError("this is the error message")
      return (
            <div>
                  <h1>advance course</h1>
                  <p>{msd}</p>
                </div>
      )
    }
    export default ErrorComponent;