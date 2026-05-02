import React from 'react';
import {Card} from "@heroui/react";
import { GoDotFill } from 'react-icons/go';

const SummercareTips = () => {
    return (
     <div className='container mx-auto bg-neutral text-white space-y-2 p-4'>
       <div className='flex justify-center'>
        <div className="badge badge-outline badge-warning"><GoDotFill/> Stay Healthy</div>
       </div>
        <h1 className='text-center text-2xl font-bold'>Summer Care Tips</h1>
       <div className='grid md:grid-cols-3 gap-5 px-10 py-5 lg:px-50'>
         <div><Card className='border-t-6 border-t-warning' variant="default">
        <Card.Header className=" space-y-5 p-5">
          <Card.Title>Stay Hydrated</Card.Title>
          <Card.Description>Drink at least 8–10 glasses of water daily. Carry a reusable water bottle wherever you go in the summer heat.</Card.Description>
        </Card.Header>
       
                  </Card></div>
         <div><Card className='border-t-6 border-t-warning' variant="default">
        <Card.Header className=" space-y-5 p-5">
          <Card.Title>Use Sunscreen Daily</Card.Title>
          <Card.Description>Apply SPF 50+ sunscreen 30 minutes before going out. Reapply every 2 hours for protection. </Card.Description>
        </Card.Header>
       
                  </Card></div>
         <div><Card className='border-t-6 border-t-warning' variant="default">
        <Card.Header className=" space-y-5 p-5">
          <Card.Title>Protect Your Eyes</Card.Title>
          <Card.Description>Wear UV-protective sunglasses to shield your eyes from harmful ultraviolet radiation during peak sun hours.</Card.Description>
        </Card.Header>
       
                  </Card></div>
        
       </div>
          
     </div>
    );
};

export default SummercareTips;