import React from 'react';

const Countdown = () => {
    return (
        <div>
            <h2 className='text-3xl text-center font-bold font-mono text-zinc-800'>Our biggest wholesale offer will start in....</h2>
            <div class="grid grid-flow-col gap-5 text-center auto-cols-max mt-20 mb-14 ml-3 md:mx-96 md:px-12">
  <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span class="countdown font-mono text-5xl">
      <span style={{'--value': 15}}></span>
    </span>
    days
  </div> 
  <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span class="countdown font-mono text-5xl">
      <span style={{'--value': 10}}></span>
    </span>
    hours
  </div> 
  <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span class="countdown font-mono text-5xl">
      <span style={{'--value': 24}}></span>
    </span>
    min
  </div> 
  <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span class="countdown font-mono text-5xl">
      <span style={{'--value': 32}}></span>
    </span>
    sec
  </div>
</div>
        </div>
    );
};

export default Countdown;<h2></h2>