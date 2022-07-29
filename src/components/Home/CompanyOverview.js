import React from 'react';

const overviews = [
   {
      name: 'Wide range of brands',
      description: 'We can help with your financing plan, we can offer some tips and tricks. Drive off with this dream car of yours regardless of your credit history.'
   },
   {
      name: 'Trusted by our clients',
      description: 'We can help with your financing plan, we can offer some tips and tricks. Drive off with this dream car of yours regardless of your credit history.'
   },
   {
      name: 'Fast & easy financing',
      description: 'We can help with your financing plan, we can offer some tips and tricks. Drive off with this dream car of yours regardless of your credit history.'
   }
]

const CompanyOverview = () => {
   return (
      <>
         <div className="md:container md:mx-auto">
         <div className="text-center py-5">
            <h2 className="textColor1 text-uppercase">Why choose Us</h2>
         </div>

         <div className="allCards text-center pb-5">
            {
               overviews.map((overview => 
               <div className="mx-2 p-4 rounded overview" key={overview._id}>
                  <h4>{overview.name}</h4>
                  <p className="text-secondary mt-4">{overview.description}</p>
               </div>))
            }
         </div>
      </div>
      </>
   );
};

export default CompanyOverview;