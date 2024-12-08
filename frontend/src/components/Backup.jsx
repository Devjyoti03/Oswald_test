import React from 'react';

const Backup = ({ contractData = [] }) => {

  const ADDRESS = "https://aggregator.walrus-testnet.walrus.space";

async function downloadBlob(blobId) {
  const readUrl = `${ADDRESS}/v1/${blobId}`;
  const response = await axios.get(readUrl, { responseType: 'arraybuffer' });

  if (response.status !== 200) {
    throw new Error(`Failed to download blob: ${response.statusText}`);
  }

  // Determine the file path where the zip will be saved
  const zipFilePath = path.join(DOWNLOAD_DIR, `downloaded_${blobId}.zip`);
}
  return (
    <section className="lg:py-[65px] py-10 text-white px-4">
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mt-4 mb-6 text-center text-white">My Backups</h2>
      {contractData.length === 0 ? (
        <p className="text-white text-center">No backups found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contractData.map((backup, index) => (
            <div key={index} className="border border-gray-700 rounded-md p-4 bg-gray-800 shadow-lg">
              <h3 className="text-lg font-semibold text-white mb-2">Backup {index + 1}</h3>
              <p className="text-white mb-1">
                Walrus ID:
                <span className="font-mono text-gray-300 block truncate">{backup.cid}</span>
              </p>
              <button
                onClick={() => downloadBlob(backup.cid)}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Download Zip
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
    </section>
  );
};

export default Backup;
