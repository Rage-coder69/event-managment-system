import { getSession } from "next-auth/react";
import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
    const session = await getSession({ req });
    if(session){
        try {
            const { event, totalPrice, phoneNumber, email, advancePayment } = JSON.parse(req.body);
            const userId = session.user.id;

            // combine the arrays into a single array
            let foods = event.starterFood.concat(event.mainFood, event.dessertFood);


            let food = foods.map((f) => ({
                foodId : f
            }));

            let equipment = event.equipment.map((e) => ({
                equipmentId : e
            }));

            const _event = await prisma.events.create({
                data : {
                    event_type: event.eventType,
                    guestCountId : event.guest,
                    event_environment : event.environment,
                    venueId : event.venue,
                    userId,
                    phone_number : phoneNumber,
                    date : event.date,
                    total_price : totalPrice,
                    advance_payment : advancePayment,
                    payment_status : "pending",
                    event_status : "pending",
                    event_foods : {
                        create : food
                    },
                    event_equipment : {
                        create : equipment
                    },
                }
            });
            if(await _event){
                return res.json({
                    message : "Event created successfully",
                });
            } else{
                return res.json({
                    message : "Event creation failed!",
                });
            }
        } catch (e) {
            return res.json({
                error : e.message
            });
        }
    } else {
        return res.json({
            message : "Not Authenticated!"
        });
    }
}