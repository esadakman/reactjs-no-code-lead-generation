const OutputPage = ({ config, inputValues }) => {
  const { title, description, outputVariables, imageUrl } = config;

  return (
    <div>
      {title !== "Contact Page" && (
        <div>
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p>{description}</p>
          {/* <img src={imageUrl} alt={title} /> */}

          <fieldset className="border rounded p-2 space-y-2">
            <legend className="text-md font-bold mb-2">Output Variables:</legend>
            {outputVariables?.map((output, index) => (
              <div key={index} className="space-y-2">
                <div className="flex">
                  <label className="mb-1 font-semibold">Output Name:</label>
                  <p>{output.name}</p>
                </div>
                <div className="flex">
                  <label className="mb-1 font-semibold">Output Value:</label>
                  <p>{output.value}</p>
                </div>
                <div className="flex">
                  <label className="mb-1 font-semibold">Output Unit:</label>
                  <p>{output.unit}</p>
                </div>
              </div>
            ))}
          </fieldset>
        </div>
      )}
    </div>
  );
};

export default OutputPage;
