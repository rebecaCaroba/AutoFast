import { BudgetClient } from "./BudgetClient"
import { BudgetMechanic } from "./BudgetMechanic"


export default function Budget() {
    const user = 'mecanico'

    return (
        <>
            {user == 'mecanico' ? (
                <BudgetMechanic />
            ): (

                <BudgetClient />
            )}
        </>
    )
}