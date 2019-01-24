For a given chemical formula represented by a string, write a function that counts the number of atoms of each element contained in the molecule and returns an object where keys correspond to atoms and values to the number of each atom in the molecule.

For example:

The input 'H2O' must return {'H': 2, 'O': 1}

The input 'Mg(OH)2' must return {'Mg': 1, 'O': 2, 'H': 2}

The input 'K4[ON(SO3)2]2' must return {'K': 4, 'O': 14, 'N': 2, 'S': 4}

As you can see, some formulas have brackets in them. The index outside the brackets tells you that you have to multiply count of each atom inside the bracket on this index. For example, in Fe(NO3)2 you have one iron atom, two nitrogen atoms and six oxygen atoms.

Note that brackets may be round, square or curly and can also be nested. Index after the braces is optiona
