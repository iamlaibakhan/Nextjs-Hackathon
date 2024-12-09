import React from 'react';

export default function Faq() {
  return (
    <div className="flex flex-col items-center px-4 md:px-8 mx-auto w-full max-w-screen-lg">
      <h1 className="text-center font-bold text-3xl md:text-4xl mt-10 mb-4">Question Look Here</h1>
      <p className="text-center mb-8 text-gray-600">
        lorem ipsum is simply dummy text of the printing and typestting industry.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {/* FAQ Item 1 */}
        <div className="bg-slate-200 p-4 rounded-lg shadow-md">
          <div className="flex justify-between mb-2">
            <h1 className="font-semibold">What types of chairs do you offer?</h1>
            <span className="text-xl">➕</span>
          </div>
          <p>
          Lorem ipsum dolor sit consecteture adipisicing elit.Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus enum delectus deserunt,odit expedita eos molestiae ipsa totam quidem.
          </p>
        </div>

        {/* FAQ Item 2 */}
        <div className="bg-slate-200 p-4 rounded-lg shadow-md">
          <div className="flex justify-between mb-2">
            <h1 className="font-semibold">How can we get in touch with you?</h1>
            <span className="text-xl">➕</span>
          </div>
          <p>
          Lorem ipsum dolor sit consecteture adipisicing elit.Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus enum delectus deserunt,odit expedita eos molestiae ipsa totam quidem.
          </p>
        </div>

        
        <div className="bg-slate-200 p-4 rounded-lg shadow-md">
          <div className="flex justify-between mb-2">
            <h1 className="font-semibold">Do your chairs come with a warranty?</h1>
            <span className="text-xl">➕</span>
          </div>
          <p>
          Lorem ipsum dolor sit consecteture adipisicing elit.Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus enum delectus deserunt,odit expedita eos molestiae ipsa totam quidem.
          </p>
        </div>

        
        <div className="bg-slate-200 p-4 rounded-lg shadow-md">
          <div className="flex justify-between mb-2">
            <h1 className="font-semibold">What will be delivered?and when?</h1>
            <span className="text-xl">➕</span>
          </div>
          <p>
          Lorem ipsum dolor sit consecteture adipisicing elit.Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus enum delectus deserunt,odit expedita eos molestiae ipsa totam quidem.
          </p>
        </div>

        
        <div className="bg-slate-200 p-4 rounded-lg shadow-md">
          <div className="flex justify-between mb-2"> 
            <h1 className="font-semibold">Can I try chair before purchasing?</h1>
            <span className="text-xl">➕</span>
          </div>
          <p>
          Lorem ipsum dolor sit consecteture adipisicing elit.Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus enum delectus deserunt,odit expedita eos molestiae ipsa totam quidem.
          </p>
        </div>

        
        <div className="bg-slate-200 p-4 rounded-lg shadow-md">
          <div className="flex justify-between mb-2">
            <h1 className="font-semibold">How do I  clean and maintain my comforty chair?</h1>
            <span className="text-xl">➕</span>
          </div>
          <p>
          Lorem ipsum dolor sit consecteture adipisicing elit.Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus enum delectus deserunt,odit expedita eos molestiae ipsa totam quidem.
          </p>
        </div>
      </div>
    </div>
  );
}