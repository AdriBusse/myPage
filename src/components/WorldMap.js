import { getName } from 'country-list';
import React from 'react';
import { VectorMap } from 'react-jvectormap';

export default function WorldMap() {
  const handleClick = (e, countryCode) => {
    console.log(countryCode);
  };
  const countryCard = (name) => {
    return (
      <div
        className="flex items-center justify-center h-20 p-2 m-1 text-xl font-bold text-white bg-gray-700 border border-black rounded-md w-54"
        key={name}
      >
        {name}
      </div>
    );
  };
  const renderCountry = (e) => {
    switch (e) {
      case 'VN':
        return countryCard('Vietnam');
      case 'GB':
        return countryCard('Great Britain');
      default:
        return countryCard(getName(e));
    }
  };
  const mapData = {
    VN: 0,
    KH: 0,
    TH: 0,
    MM: 0,
    AE: 0,
    QA: 0,
    DE: 0,
    NL: 0,
    BE: 0,
    DK: 0,
    AT: 0,
    CH: 0,
    IT: 0,
    FR: 0,
    ES: 0,
    PT: 0,
    GB: 0,
  };
  console.log(Object.keys(mapData));

  return (
    <div className="flex flex-col justify-center w-3/5 ">
      <h1 className="py-10 text-4xl font-semibold">
        Länderpunkte: {Object.keys(mapData).length}
      </h1>
      <div className="overflow-hidden border-2 border-gray-500 rounded">
        <VectorMap
          map={'world_mill'}
          backgroundColor="#0077be" //change it to ocean blue: #0077be
          zoomOnScroll={true}
          containerStyle={{
            width: '100%',
            height: '420px',
          }}
          onRegionClick={handleClick} //gets the country code
          containerClassName="map"
          regionStyle={{
            initial: {
              fill: '#e4e4e4',
              'fill-opacity': 0.9,
              stroke: 'none',
              'stroke-width': 1,
              'stroke-opacity': 0,
            },
            hover: {
              'fill-opacity': 0.8,
              cursor: 'pointer',
            },
            selected: {
              fill: '#a1ae39', //color for the clicked country
            },
            selectedHover: {},
          }}
          regionsSelectable={false}
          series={{
            regions: [
              {
                values: mapData, //this is your data
                scale: ['#a1ae39'], //your color game's here| scale from to
                normalizeFunction: 'polynomial',
              },
            ],
          }}
        />
      </div>
      <div className="grid grid-cols-3 mt-5 grid-flow">
        {Object.keys(mapData).map((e) => {
          return renderCountry(e);
        })}
      </div>
    </div>
  );
}
