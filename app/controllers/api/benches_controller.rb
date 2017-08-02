class Api::BenchesController < ApplicationController
  def create

  end

  def index
    @benches = Bench.all
  end

  def new

  end
end
