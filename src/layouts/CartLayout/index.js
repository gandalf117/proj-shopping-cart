import PropTypes from 'prop-types';

import TopMenu from 'components/TopMenu';
import SideMenu from 'components/SideMenu';
import Footer from 'components/Footer';

import {
	StyledContainer,
	StyledMainWrapper,
	StyledMainContent,
} from './styles';

function AdminLayout({ children }) {
	return (
		<StyledContainer>
			<TopMenu />
			<StyledMainWrapper>
				<SideMenu />
				<StyledMainContent>{children}</StyledMainContent>
			</StyledMainWrapper>
			<Footer />
		</StyledContainer>
	);
}

AdminLayout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default AdminLayout;
