import React from 'react';

const Stat = () => {
    return (
        <div>
            <h2 className='text-3xl text-zinc-800 font-bold font-mono text-center mb-8'>Our monthly progress</h2>
            <div class="stats stats-vertical lg:stats-horizontal px-12 ml-10 md:mx-80 shadow mb-12">
  
  <div class="stat">
    <div class="stat-title">product Stored</div>
    <div class="stat-value">12K</div>
    <div class="stat-desc">Jul 1st - Aug 1st</div>
  </div>
  
  <div class="stat">
    <div class="stat-title">Total transactions</div>
    <div class="stat-value">$24,200</div>
    <div class="stat-desc">↗︎ 400 (22%)</div>
  </div>
  
  <div class="stat">
    <div class="stat-title">Monthly shipment</div>
    <div class="stat-value">8,200</div>
    <div class="stat-desc">↗︎ 90 (14%)</div>
  </div>
  
</div>
        </div>
    );
};

export default Stat;