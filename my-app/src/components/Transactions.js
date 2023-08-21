import React from "react";
import TransactionItem from "./TransactionItem";

function transactions({transactions}) {
    return(
        <table>
            <tbody>
                <tr>
                    <th><h2>Date</h2></th>
                    <th><h2>Description</h2></th>
                    <th><h2>category</h2></th>
                    <th><h2>Amount</h2></th>
                </tr>
                {transactions.map((Transaction) => {
                return <TransactionItem key={transaction.id} date={transaction.date} description={transaction.description} category={transaction.category} amount={transaction.amount} />
                })
               }
            </tbody>
        </table>
        )
    }

export default Transactions;