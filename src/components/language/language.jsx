import React, { PropTypes } from 'react';
import { observer, inject } from 'mobx-react';

// Import language resources

@inject('language')
@observer
class Language extends React.Component {
  render() {
    const { language, resource } = this.props;
    return (
      <span>
        {language.resource[resource]}
      </span>
    );
  }
}

Language.propTypes = {
  resource: PropTypes.string
};

export default Language;
