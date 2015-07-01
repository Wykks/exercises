module.exports = invertTree;

function invertTree(tree) {
    if (tree.left)
        invertTree(tree.left);
    if (tree.right)
        invertTree(tree.right);
    if (tree.left || tree.right) {
        var tmp = tree.left;
        tree.left = tree.right;
        tree.right = tmp;
    }
}