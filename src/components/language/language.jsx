import React, { PropTypes } from 'react';
import { observer, inject } from 'mobx-react';

@inject('language')
@observer
class Language extends React.Component {
  render() {
    const { language, resource } = this.props;
    const isNestedResource = resource.indexOf('.') !== -1;
    return (
      <span>
        {isNestedResource
          ? language.resource[resource.split('.')[0]][resource.split('.')[1]]
          : language.resource[resource]}
      </span>
    );
  }
}

Language.propTypes = {
  resource: PropTypes.string
};

export default Language;
