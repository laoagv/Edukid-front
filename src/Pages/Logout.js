import { front } from "../server";
function Logout(props) {
    return (
      <div>
        {localStorage.clear()}{
            window.location.replace("/")
        }
      </div>
    );
  }
  export default  Logout