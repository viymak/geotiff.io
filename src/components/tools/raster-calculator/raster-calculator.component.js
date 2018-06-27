import React from 'react';
import ToolHeader from '../../shared/tool-header';
import ToolContent from '../../shared/tool-content';
import ToolFooter from '../../shared/tool-footer';

const RasterCalculator = ({ rasterCalculator, updateRasterCalculator, execute }) => (
  <div id='raster-calculator-tool' className='tool'>
    <ToolHeader
      logoURL="/images/raster-calculator.svg"
      title="Run Raster Calculator on the raster"
    />
    <ToolContent>
      <p>Description of how raster calculator works goes here.</p>
      <br/>
      <p>Enter your raster calculator operation.</p>
      <textarea
        type='string'
        className='gt-input'
        onChange={updateRasterCalculator}
        value={rasterCalculator}
        rows="5"
      />
      <div className='content-row submit-row'>
        <button
          className='gt-button-accent full'
          onClick={execute}
        >
          Compute Raster Calculator
        </button>
      </div>
    </ToolContent>
    <ToolFooter />
  </div>
);

export default RasterCalculator
