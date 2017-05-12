import React from 'react';
import { observer, inject } from 'mobx-react';

const Language = ({ language, resource }) => resource.indexOf('.') !== -1
  ? <span>
      {language.resource[resource.split('.')[0]][resource.split('.')[1]]}
    </span>
  : <span>{language.resource[resource]}</span>;

export default inject('language')(observer(Language));
