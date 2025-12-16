import messages from "@/utils/message"
import DashboardTopHead from "../Dashboard/DashboardTopHead"

const Admin = () => {
  return (
    <>
        <DashboardTopHead
                tabName={messages.Admin}
                buttonName=""
              />
    </>
  )
}

export default Admin
