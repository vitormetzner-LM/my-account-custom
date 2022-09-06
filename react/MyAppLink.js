import PropTypes from "prop-types";
import { intlShape, injectIntl } from "react-intl";

function MyAppLink({ render , intl }) {
    return render([
        {
            name: intl.formatMessage({ id: "Meus Vales" }),
            path: "/meusvales",
        },
    ]);
}

MyAppLink.PropTypes = {
  render: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(MyAppLink);
