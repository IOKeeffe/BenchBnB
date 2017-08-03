class Api::BenchesController < ApplicationController
  def create

  end

  def show
    @bench = Bench.find_by(id: params[:id])
  end

  def index
    @benches = Bench.all
  end

  def new

  end

  private def bench_params
    params.require(:bench).permit(
      :description,
      :lat,
      :lon,
      :owner_id,
    )
  end
end
