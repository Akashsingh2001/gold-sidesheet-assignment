export const goldComparisonData = [
  {
    id: 1,
    name: 'SecureLib v1.2',
    hasGold: true,
    goldDetails: {
      riskLevels: ['red', 'orange', 'green'],
      findings: ['Critical', 'High', 'Medium'],
      vulnerabilities: {
        critical: 2,
        high: 4,
        medium: 7,
        low: 10,
      },
      dependencies: {
        old: 'lodash@4.17.15',
        new: 'lodash@4.17.21',
        status: 'verified',
      },
      usage: [
        { key: '1', name: 'Project A' },
        { key: '2', name: 'Project B' },
      ],
    },
  },
  {
    id: 2,
    name: 'AuthX v3.4',
    hasGold: false,
    goldDetails: null,
  },
];
