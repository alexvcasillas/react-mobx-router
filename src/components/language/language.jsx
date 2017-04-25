import React, { PropTypes } from 'react';
import { observer, inject } from 'mobx-react';

const Language = ({ language, resource }) => resource.indexOf('.') !== -1
  ? <span>
      {language.resource[resource.split('.')[0]][resource.split('.')[1]]}
    </span>
  : <span>{language.resource[resource]}</span>;

export default inject('language')(observer(Language));

// @inject('language')
// @observer
// class Language extends React.Component {
//   render() {
//     const { language, resource } = this.props;
//     const isNestedResource = resource.indexOf('.') !== -1;
//     return (
//       <span>
//         {isNestedResource
//           ? language.resource[resource.split('.')[0]][resource.split('.')[1]]
//           : language.resource[resource]}
//       </span>
//     );
//   }
// }
//
// Language.propTypes = {
//   resource: PropTypes.string
// };
//
// export default Language;
