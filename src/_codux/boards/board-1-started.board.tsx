import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'board1_started',
    Board: () => <div></div>,
    environmentProps: {
        windowBackgroundColor: '#ffffff',
    },
});
