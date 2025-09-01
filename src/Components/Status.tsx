// status in  union
type StatusType = "active" | "inactive" | "pending";
// type User = {
//      status: StatusType;
// };

const Status = () => {
  // Example status value, replace with actual prop or state as needed
  const status: StatusType = "active";

  let message = "";
  if (status === "active") {
    message = "User is active";
  } else if (status === "inactive") {
    message = "User is Inactive";
  } else {
    message = "User is pending";
  }

  return (
    <div>
      {message}
    </div>
  )
}

export default Status
