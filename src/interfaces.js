import PropTypes from 'prop-types';

export const SOCIAL_INTERFACE = {
  name: PropTypes.string.isRequired,
  fa_name: PropTypes.array.isRequired,
  color: PropTypes.string.isRequired,
  sharing_url: PropTypes.string.isRequired,
  only_mobile: PropTypes.bool,
  id: PropTypes.string,
};
export const LOGO_SIZE_INTERFACE = 'lg' || 'xs' || '6x';
