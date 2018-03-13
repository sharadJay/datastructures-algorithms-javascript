// write using stack

function towerOfHanoi(numberOfDisks, source, using, to) {
    if (numberOfDisks > 0) {
        towerOfHanoi(numberOfDisks - 1, source, to, using);
        console.log(`Move a disk from ${source} to ${to}`);
        towerOfHanoi(numberOfDisks - 1, using, source, to);
    }
}

towerOfHanoi(4, "1", "2", "3");