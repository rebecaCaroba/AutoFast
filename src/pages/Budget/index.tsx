import { BudgetClient } from "./BudgetClient"
import { BudgetMechanic } from "./BudgetMechanic"


export default function Budget() {
    const user: string = 'od'

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