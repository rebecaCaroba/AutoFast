import { DashboardClient } from "./DashboardClient";
import { DashboardMechanic } from "./DashboardMechanic";

export default function Dashboard() {
    const user = 'mecanico'

    return (
        <>
            {user == 'mecanico' ? (
                <DashboardMechanic />
            ): (

                <DashboardClient />
            )}
        </>
    )
}