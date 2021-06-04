import React from 'react';

import DefaultOverlayContent from '../DefaultOverlayContent';
import UniqueOverlay from '../UniqueOverlay';
import { ModelSection, ModelsWarpper } from '../Model';

import { Container, Spacer } from './styles';



const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWarpper>
        <div>
          {[
            'Model One',
            'Model Two',
            'Model Three',
            'Model Four',
            'Model Five',
            'Model Six',
            'Model Seven',
          ].map(modelName => (
            <ModelSection 
            key={modelName}
            className="cars"
            modelName={ modelName }
            overlayNode={
              <DefaultOverlayContent
                label={ modelName }
                description="Oder Online for Delivery"
              />
            }
          />
          ))}
        </div>

        <Spacer />

        <UniqueOverlay />
      </ModelsWarpper>
    </Container>
  );
};

export default Page;
