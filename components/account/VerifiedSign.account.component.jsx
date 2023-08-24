const VerifiedSign = () => {
  return (
    <>
      <i className="fa-solid fa-check" id="verified"></i>

      <style jsx>{`
        #verified {
          background: #2b91e3 !important;
          width: 20px !important;
          height: 20px !important;
          padding: 5px !important;
          border-radius: 50% !important;
          color: #fbfbfb !important;
          font-size: 12px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
        }
      `}</style>
    </>
  );
};

export default VerifiedSign;