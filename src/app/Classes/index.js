import React from 'react';
import { Button, Grid, Header, Card } from 'semantic-ui-react';
import { Link } from 'gatsby';
import { getClasses } from '../../functions/db';
import State from '../../state';
import CustomCard from '../components/CustomCard';

const ClassesList = () => {
	const [loadedData, setLoadedData] = React.useState(false);
	const state = React.useContext(State);
	const stateClasses = state.classes;
	const stateAuth = state.auth;

	React.useEffect(() => {
		attemptLoadClasses();
	});

	async function attemptLoadClasses() {
		if (loadedData) return;
		setLoadedData(true);
		try {
			const classes = await getClasses();
			stateClasses.loadPublicClasses(classes);
		} catch {}
	}

	return (
		<React.Fragment>
			<Grid>
				<Grid.Row columns={2}>
					<Grid.Column>
						<Header as='h1'>Classes</Header>
					</Grid.Column>
					<Grid.Column textAlign='right'>
						{stateAuth.user.id ? (
							<Button
								as={Link}
								to='/classes/new'
								icon='plus'
								color='green'
								content='New Class'
							/>
						) : null}
					</Grid.Column>
				</Grid.Row>
			</Grid>
			<Card.Group itemsPerRow={3} stackable>
				{/* Loop through classes and their info cards */}
				{stateClasses.publicClasses.flatMap(curClass => {
					return (
						<CustomCard
							isAuthor={curClass.userId === stateAuth.user.id}
							key={`/classes/view#${curClass.id}`}
							meta={curClass.userName}
							header={curClass.name || ''}
							description={
								curClass.description || 'No description.'
							}
							to={`/classes/view#${curClass.id}`}
							editTo={`/classes/edit#${curClass.id}`}
						/>
					);
				})}
			</Card.Group>
		</React.Fragment>
	);
};

export default ClassesList;
