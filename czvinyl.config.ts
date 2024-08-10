import type { CzVinylConfig } from 'cz-vinyl';

const czvinylConfig: CzVinylConfig = {
	headerFormat: '{type}: {emoji} {subject}',
	skipTicketId: true,
	subjectMaxLength: 60,
};

export default czvinylConfig;
