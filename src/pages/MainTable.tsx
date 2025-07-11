import React, { useState } from 'react';
import { Table, Button, Drawer } from 'antd';
import { goldComparisonData } from '../constants/goldComparisonData';
import GoldSideSheet from '../components/GoldSideSheet';

const MainTable: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const handleViewDetails = (record: any) => {
    setSelectedItem(record);
    setDrawerOpen(true);
  };

  const columns = [
    {
      title: 'Component',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: any) => (
        <Button type="link" onClick={() => handleViewDetails(record)}>
          View Details
        </Button>
      ),
    },
  ];

  return (
    <>
      <Table
        dataSource={goldComparisonData}
        columns={columns}
        rowKey="id"
        pagination={false}
      />

      <Drawer
        title={
          selectedItem?.hasGold
            ? 'Gold Version Comparison'
            : 'Standard Version Details'
        }
        placement="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        width={selectedItem?.hasGold ? '100%' : 600}
      >
        {selectedItem?.hasGold ? (
          <GoldSideSheet data={selectedItem.goldDetails} />
        ) : (
          <p>No Gold version available.</p>
        )}
      </Drawer>
    </>
  );
};

export default MainTable;
