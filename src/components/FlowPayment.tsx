import * as React from "react";

import { FaRocket, FaBoxOpen, FaPaypal, FaCoins } from "react-icons/fa";
import { Card } from "@/components/ui/card";

const payments = [
  {
    id: 1,
    name: "Extra Shipping",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typeset ting industry lorem Ipsum",
    icon: FaRocket,
  },
  {
    id: 2,
    name: "Return Policy",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typeset ting industry lorem Ipsum",
    icon: FaBoxOpen,
  },
  {
    id: 3,
    name: "Payment Secured",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typeset ting industry lorem Ipsum",
    icon: FaPaypal,
  },
  {
    id: 4,
    name: "Money Back Guarantee",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typeset ting industry lorem Ipsum",
    icon: FaCoins,
  },
];

export default function CardWithForm() {
  return (
    <div className="flex flex-wrap mt-28">
      {payments.map((payment) => (
        <Card key={payment.id} className="w-[300px] p-5 m-auto">
          <div className="flex justify-center items-center mb-3">
            <span className="text-yellow-400 hover:animate-bounce mr-1">
              {React.createElement(payment.icon, {
                style: { fontSize: "26px" },
              })}
            </span>
            <h2>{payment.name}</h2>
          </div>
          <div className="text-center text-slate-600 leading-6">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typeset ting
              industry lorem Ipsum
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
}
