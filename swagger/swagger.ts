import YAML from 'yamljs';

const specs = YAML.load('./swagger/api_docs.yaml');

export default specs;