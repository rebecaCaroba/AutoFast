import { BudgetClient } from "./BudgetClient"
import { BudgetMechanic } from "./BudgetMechanic"


export default function Budget() {
    const user: string = 'mecanico'

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